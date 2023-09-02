import GalleryImage from "./GalleryImage";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ResourceType } from "./types";

function GalleryMasonry({ resources, type }: { resources: ResourceType[]; type: string }) {
    const [width, setWidth] = useState(1);
    const [numColumns, setNumColumns] = useState(1);

    useEffect(() => {
        // Handler to call on window resize
        const handleResize = () => {
            // Set window width/height to state
            setWidth(window.innerWidth);
        };
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        let newNumColumns = 1;
        if (width > 800) {
            newNumColumns = 3;
        } else if (width > 600) {
            newNumColumns = 2;
        }
        setNumColumns(newNumColumns);
    }, [width]);

    const getResourceColumns = () => {
        const resourceColumns: ResourceType[][] = [];
        const columnLengths = [];
        for (let i = 0; i < numColumns; i++) {
            resourceColumns.push([]);
            columnLengths.push(0);
        }
        for (let resource of resources) {
            // find smallest column, add value
            const idxOfShortestColumn = _idxOfMin(columnLengths);
            resourceColumns[idxOfShortestColumn].push(resource);
            // update height of column
            columnLengths[idxOfShortestColumn] += resource.heightWidthRatio;
        }
        return resourceColumns;
    };

    const _idxOfMin = (arrayNums: number[]) => {
        let min = arrayNums[0];
        let idxOfMin = 0;
        for (let i = 1; i < arrayNums.length; i++) {
            if (arrayNums[i] < min) {
                min = arrayNums[i];
                idxOfMin = i;
            }
        }
        return idxOfMin;
    };

    const resourceColumns = getResourceColumns();

    return (
        <div className="masonry flex">
            {resourceColumns.map((col) => (
                <div key={uuidv4()}>
                    {col.map((r) => (
                        <GalleryImage key={r.src} type={type} {...r} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default GalleryMasonry;
