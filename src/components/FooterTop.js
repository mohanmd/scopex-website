import React from 'react';
import _ from 'lodash';

export default class FooterTop extends React.Component {
    render() {
        return(
            <footer className="footer">
                {_.map(_.get(menuItem, 'footerMenu', null), (section, section_idx) => {
                    // console.log(section);
                    // console.log(section_idx);
                    <div key={section_idx } className="grid-item">
                      <div className="col col-3">
                        <div className="footer_col_title">section</div>
                      </div>
                    </div>
                })}
            </footer>
        )
    }
}