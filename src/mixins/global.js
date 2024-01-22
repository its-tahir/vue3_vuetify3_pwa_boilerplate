export default {
    data() {
        return {
            rules: {
                required: (value) => !!value || 'Field is required',
                email: (value) => {
                    const pattern =
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return pattern.test(value) || 'Enter a valid email';
                },
                password: (v) =>
                    (!!v && v.length >= 6) ||
                    'Password must be 6 chars or more',
            },
        };
    },
};
