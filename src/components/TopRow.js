import * as React from 'react';
import HeaderText from './header'
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import "./TopRow.css"

export default function TopRow() {
    return (
        <div className="top-row-container">
            <div className="header-text">
                <HeaderText/>
            </div>
            <div className="report-download">
                <Button variant="contained" startIcon={<FileDownloadIcon/>} sx={{'fontSize' : '0.75rem', 'background-color': '#4E73DF'}}>Generate Report</Button>
            </div>
        </div>
  );
}