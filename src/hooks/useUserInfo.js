import { useState, useEffect } from "react";
import { getUserInfo } from "../api/userInfo";

export const useUserInfo = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            setLoading(true);
            try {
                const data = await getUserInfo();
                setUserInfo(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserInfo();
    }, []);

    return { userInfo, loading, error };
};
