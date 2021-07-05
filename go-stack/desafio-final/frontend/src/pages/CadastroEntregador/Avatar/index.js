import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';

import { Container } from './styles';

import api from '../../../services/api';

function Avatar() {
    const ref = useRef();
    const { defaultValue, registerField } = useField('avatar');

    const [file, setFile] = useState(defaultValue && defaultValue.id);
    const [preview, setPreview] = useState(defaultValue && defaultValue.url);

    useEffect(() => {
        if (ref.current) {
            registerField({
                name: 'avatar_id',
                ref: ref.current,
                path: 'dataset.file',
            });
        }
    }, [ref, registerField]);

    async function handleOnChange(e) {
        const data = new FormData();

        data.append('file', e.target.files[0]);
        console.log(e.target.files[0]);

        const res = await api.post('/files', data);
        console.log(res.data);

        const { id, url } = res.data;
        setFile(id);
        setPreview(url);
    }
    return (
        <Container>
            <label htmlFor="avatar">
                <img
                    src={
                        preview ||
                        'https://lh3.googleusercontent.com/proxy/eLj_Uhp6dRo-lCcB_RQNTIypxwJDYcshJZz9j9TPaLpfrDHwPPTNNaY4Ic167MJFhEJydFzDHk19ObPMsYJrUj92mFiR4iUNkVftEhc7av6T'
                    }
                    alt="avatar usuario"
                />

                <input
                    type="file"
                    id="avatar"
                    accept="image/*"
                    data-file={file}
                    onChange={handleOnChange}
                    ref={ref}
                />
            </label>
        </Container>
    );
}

export default Avatar;
