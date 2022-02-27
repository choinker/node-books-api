import React from "react";

const CategoryHome = ({categoryName = 'default', categoryData = []}) => {

    // TODO: extract year from pubDate, break out card component

    return (
        <div>
            <h2>
                Category Home: {categoryName}
            </h2>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                {categoryData && categoryData.map((element) => {
                    return (
                        <div>
                            <div>title: {element.title} </div>
                            <div>author: {element.author} </div>
                            <div>pubDate: {element.pubDate} </div>
                        </div>
                    );
                })}
            </div>
            
        </div>
    );
}

export default CategoryHome;
