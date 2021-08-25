import React from 'react'

const detail = ({match}) => {

let itemID = match.params.id;

return (
        <div>
            {itemID}
        </div>
    )
}

export default detail;