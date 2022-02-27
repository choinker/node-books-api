import React from "react";

const CategoryHome = ({categoryName = 'default', categoryData = []}) => {

    return (
        <div>
            <h2>
                Category Home: {categoryName}
            </h2>
            {categoryData && categoryData.map((element) => {
                return <div>name: {element.title} </div>;
            })}
        </div>
    );
}

export default CategoryHome;
