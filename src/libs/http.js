class Http {
    static instance = new Http();

    get = async (url) => {
        try {
            let req = await fetch(url);

            let json = await req.json();

            return json;
        } catch (err) {
            console.log('error', err);

            throw Error(err);
        }
    }

    posts = async (url, body) => {
        try {
            let req = await fetch(url, {
                method: 'POST',
                body
            });

            let json = await req.json()

            return json;
        } catch (err) {
            console.log('error metodo post', err);
            throw Error(err);
        }
    }
}

export default Http;