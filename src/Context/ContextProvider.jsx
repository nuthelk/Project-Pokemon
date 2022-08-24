import React, { createContext, useState } from 'react'

const Context = createContext();

const ContextProvider = ({children}) => {
    const [showModal, setShowModal] = useState(false);


    const handleModal = () => {
        setShowModal(!showModal);
      };

    const data = {
        handleModal,
        showModal,
    }

    return <Context.Provider value={data}>{children}</Context.Provider>;
}

export {ContextProvider, Context}