import React, { useEffect, useState } from 'react';
import { AuthenticateUser } from '../../utils/authUser';
import http from '../../service/config';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../redux/selectors';
import Loading from '../../components/Loading';
import { MainWrapper } from '../../components/MainWrapper';
import { useParams } from 'react-router-dom';
import { CreatorProps } from '../../types/types';
import DetailContent from '../../components/DetailContent';

const CreatorDetail: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<CreatorProps>();

    const dispatch = useDispatch();
    const { creatorId } = useParams();
    const isUserAuth = useSelector(selectAuth);

    const fetchComic = async (id?: string) => {
        try {
            const response = await http.get(`creators/${id}`);

            if (response.status !== 200) {
                throw new Error('Network response was not ok');
            }
            setData(response.data.data.results[0]);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        AuthenticateUser(dispatch);
        if (isUserAuth) {
            setLoading(true);
            fetchComic(creatorId).then(() => setLoading(false));
        }
    }, [creatorId, dispatch, isUserAuth]);

    return (
        <MainWrapper>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <DetailContent
                        title={data?.fullName}
                        description={data?.description}
                        image={`${data?.thumbnail.path}.${data?.thumbnail.extension}`}
                        series={data?.series.items}
                        stories={data?.stories.items}
                        comics={data?.comics.items}
                        events={data?.events.items}
                    />
                </>
            )}
        </MainWrapper>
    );
};

export default CreatorDetail;
