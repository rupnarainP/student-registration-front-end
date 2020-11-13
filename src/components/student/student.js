import React, { useEffect, useState } from 'react';

function Student() {
    // const ListLoading = withListLoading(List);
    const [appState, setAppState] = useState({
        loading: false,
        student: null,
    });

    useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = `https://api.github.com/users/hacktivist123/repos`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((repos) => {
                setAppState({ loading: false, student: repos });
            });
    }, [setAppState]);

    return (
        <div className='Student'>
            <div className='container'>
                <h1>My Students</h1>
            </div>
            {/*<div className='repo-container'>*/}
            {/*    <ListLoading isLoading={appState.loading} repos={appState.repos} />*/}
            {/*</div>*/}
            <footer>
                <div className='footer'>
                    Built{' '}
                    <span role='img' aria-label='love'>
            💚
          </span>{' '}
                    with by Shedrack Akintayo
                </div>
            </footer>
        </div>
    );
}
export default Student;