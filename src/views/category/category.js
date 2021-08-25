import React from 'react'

const category = ({match}) => {

let itemID = match.params.id;

return (
        <div>
            {itemID}
        </div>
    )
}

export default category;