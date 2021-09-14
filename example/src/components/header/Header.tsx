import React from 'react';
import { Grid } from "@material-ui/core";
import logo2 from "../../assets/images/headerLogo.png";
import logo1 from "../../assets/images/logo1.png";
import { ReactComponent as FullWidth } from "../../assets/icons/fullView.svg";
import { ReactComponent as ZoomIn } from "../../assets/icons/plusCircle.svg";
import { ReactComponent as ZoomOut } from "../../assets/icons/minusCircle.svg";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './header.scss';

export default function Header({
    prevPage=()=>{},
    nextPage=()=>{},
    pageNavigaton=()=>{},
    setDisplayedPage=()=>{},
    displayedPage=1,
    pageInput=null,
    totalPages=0,
    zoomIn=()=>{},
    zoomOut=()=>{},
    fullScreen=()=>{}
}) {
    return (
        <div className="pdf_header_section">
        <Grid container alignItems="center"> 
          <Grid item md={3} xs={6}>
            <div className="book_info">
              <img className="book_thumbnail" src={logo1} alt="logo1" />
              <div className="book_name">Signaalanalyse</div>
            </div>
          </Grid>
          <Grid item md={6} xs={12} className="operations_header">
            <div id="tools">
              <div className='page_controllers'>
                <ExpandLessIcon onClick={prevPage} />
                <ExpandMoreIcon onClick={nextPage} />
              </div>

              <form
                className="page_operation"
                onSubmit={(e) => {
                  e.preventDefault();
                  pageNavigaton(Number(displayedPage));
                }}
                onBlur={(e) => {
                  e.preventDefault();
                  pageNavigaton(Number(displayedPage));
                }}
              >
                <span>Page: </span>
                <input
                  className="current_page_input"
                  ref={pageInput}
                  value={displayedPage}
                  onChange={(e) => {
                    setDisplayedPage(Number(e.target.value));
                  }}
                  onBlur={() => {
                    pageNavigaton(Number(displayedPage));
                  }}
                />{" "}
                / <span style={{ color: "#606165" }}>{totalPages}</span>
              </form>
              <div className="zoom_buttons">
                <button onClick={zoomIn}>
                  <ZoomIn />
                </button>
                <button onClick={zoomOut}>
                  <ZoomOut />
                </button>

              </div>
              <button onClick={fullScreen}>
                <FullWidth />
              </button>
            </div>
          </Grid>
          <Grid item md={3} xs={6} className="right_header">
            <div>
              <img className="pdf_logo" src={logo2} alt="logo1" />
            </div>
          </Grid>
        </Grid>
      </div>
    )
}
