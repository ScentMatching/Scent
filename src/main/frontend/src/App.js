// src/main/frontend/src/App.js

import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
   const [list, setUsers] = useState('')

    useEffect(() => {
        axios.get('/api')
        .then(response => setUsers(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            백엔드에서 가져온 데이터입니다 :{list}
        </div>
    );
}

export default App;