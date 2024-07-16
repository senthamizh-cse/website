import React from 'react';

const Departments = () => (
    <div className='depts'>
    <div class="topic">
    
    <h2 className='topics'>Departments</h2>
    </div>
        <table>
            <thead>
                <tr>
                    <th>Department</th>
                    <th>Student Count</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>AI/DS</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>AI/ML</td>
                    <td>180</td>
                </tr>
                <tr>
                    <td>CSE</td>
                    <td>220</td>
                </tr>
                <tr>
                    <td>IT</td>
                    <td>150</td>
                </tr>
                <tr>
                    <td>ECE</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>EEE</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Mechanical</td>
                    <td>120</td>
                </tr>
                {/* Add more departments as needed */}
            </tbody>
        </table>
        </div>
);

export default Departments;