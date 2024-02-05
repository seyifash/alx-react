import React from "react";
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell = null}) => {
    if(isHeader) {
        return (
            <tr>
                {textSecondCell === null ? (
                    <th colSpan="2">{textFirstCell}</th>
                ) : (
                    <>
                        <th>textFirstCell</th>
                        <th>textSecondCell</th>
                    </>
                )}
            </tr>
        );
    } else {
        return (
            <tr>
                <td>textFirstCell</td>
                <td>textSecondCell</td>
            </tr>
        );
    }
};

CourseListRow.PropTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string,
};


export default CourseListRow;