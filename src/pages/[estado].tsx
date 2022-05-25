import React from "react";
import { useRouter } from "next/router"

export default function Estado() {
    const { query } = useRouter();

    return (
        <div>
            {query.sigla}
        </div>
    )
}