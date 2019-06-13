/**
|--------------------------------------------------
| App and Container overtake
| default index page as a HOC
| privremeni komentar za Tina:
| 1. nemre se nikak to napravit kao hook jer to nije React, nego Next.js: https://spectrum.chat/next-js/general/is-there-an-example-of-app-js-as-a-functional-component~bfc80353-edf0-4850-9442-5d6c2b030209
| 2. ovaj čudni withReduxStore je Next-ov library (provjerava izvršava li se na serveru ili klijentu i prema tome nešt' modificira - ne kužim ni ja previše u ovom trenutku, ali radim na tome :-)), smješten je u lib/ jer ga nismo mi napisali, pa je bolje da se ne miješa s našim kodom IMHO
|--------------------------------------------------
*/
import App, { Container } from "next/app";
import React from "react";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";

class Gymli extends App {
    render() {
        const { Component, pageProps, reduxStore } = this.props;
        return (
            <Container>
                <Provider store={reduxStore}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}

export default withReduxStore(Gymli);
