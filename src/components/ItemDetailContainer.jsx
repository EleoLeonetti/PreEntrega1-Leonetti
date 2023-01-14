import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const documento = doc(db, "items", id);
        getDoc(documento).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
                setLoading(false);
            } else {
                console.log("Error. No se encontró documento")
             }
        });
    }, [id]);

    return(
        <div className="container">
            <div className="row d-flex justify-content-center">
                {loading ? <Loading /> : <ItemDetail item={item} />} 
            </div>
        </div>
    )
};

export default ItemDetailContainer;