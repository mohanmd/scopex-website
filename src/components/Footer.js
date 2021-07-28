import React from 'react';
import _ from 'lodash';

import Action from './Action';
import {htmlToReact, withPrefix} from '../utils';
import {menuItem} from '../data/menus/menu-item.json';

export default class Footer extends React.Component {
    render() {
      console.log(menuItem);
      let menus = menuItem.footerMenu;
      console.log(menus);
        return (
            <footer className="site-footer">
              <div className="footer_top">
                <div className="container container--lg">
                  <div className="footer_logo">
                    <img src="images/scopex-logo.svg" />
                  </div>
                  <div className="cust_row">
                    <div className="col col-3">
                      <div className="footer_col_title">Quick Links</div>
                      <div className="menu_group">
                        <ul className="footer_menu">
                            <li>
                              <img src="images/icon/arrow_icon.svg" />
                              <a href="">About us</a>
                            </li>
                            <li>
                              <img src="images/icon/arrow_icon.svg" />
                              <a href="">Blog</a>
                            </li>
                            <li>
                              <img src="images/icon/arrow_icon.svg" />
                              <a href="">Clients</a>
                            </li>
                            <li>
                              <img src="images/icon/arrow_icon.svg" />
                              <a href="">Careers</a>
                            </li>
                            <li>
                              <img src="images/icon/arrow_icon.svg" />
                              <a href="">Sign Up</a>
                            </li>
                            <li>
                              <img src="images/icon/arrow_icon.svg" />
                              <a href="">Contact Us</a>
                            </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col col-3 w-80">
                      <div className="footer_col_title">Products</div>
                      <div className="menu_group">
                        <ul className="footer_menu">
                            <li>
                              <img src="images/icon/arrow_icon.svg" />
                              <a href="">Product 1</a>
                            </li>
                            <li>
                              <img src="images/icon/arrow_icon.svg" />
                              <a href="">Product 2</a>
                            </li>
                            <li>
                              <img src="images/icon/arrow_icon.svg" />
                              <a href="">Product 3</a>
                            </li> 
                        </ul>
                      </div>
                    </div>

                    <div className="col col-3">
                      <div className="footer_col_title">Resources</div>
                      <div className="menu_group">
                        <ul className="footer_menu">
                            <li>
                              <img src="images/icon/arrow_icon.svg" />
                              <a href="">Resources 1</a>
                            </li>
                            <li>
                              <img src="images/icon/arrow_icon.svg" />
                              <a href="">Resources 2</a>
                            </li>
                            <li>
                              <img src="images/icon/arrow_icon.svg" />
                              <a href="">Resources 3</a>
                            </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col col-3">
                      <div className="address">
                        <div className="footer_col_title">Address</div>
                        <div className="address_field">
                            125-B, 2nd floor, Above Ashwini Textiles,
                            Near Singapore Shopping Center,
                            MTH Road, Ambattur, Chennai - 53.
                        </div>
                      </div>

                      <div className="enquiry" >
                        <div className="footer_col_title">Address</div>
                        <div className="enquiry_field">
                            <div className="item">E-mail: info@scopex.com</div>
                            <div className="item">Phone: +91-9841481435</div>
                        </div>
                      </div>

                      <div className="social">
                        <div className="footer_col_title">Follow Us</div>
                        {_.get(this.props, 'pageContext.site.siteMetadata.footer.has_social', null) && (
                          <ul className="site-footer__social menu">
                            {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.social_links', null), (action, action_idx) => (
                              console.log(action),
                            <li key={action_idx}>
                              <div className="icon">
                                  {_.get(action, 'icon', null) && (
                                    <a href={withPrefix(_.get(action, 'url', null))}>
                                      <img src={(_.get(action, 'icon', null))} />
                                    </a>
                                  )}
                              </div>
                            </li>
                            ))}
                          </ul>
                          )}
                      </div>
                    </div>

                     {/* shape */}
                    <div className="shape_footer">
                      <span></span>
                    </div>
                  </div>
                  
                </div>
               
              </div>

              <div className="footer_bottom">
                <div className="container container--lg">
                    <div className="copy_right text-center">
                      <span>&copy;</span>  2021 scopex.com
                    </div>
                    <div className="develop_info text-center">
                      Design & Developed By <a className="company_link">Xmediasolution.com</a>
                    </div>
                </div>
              </div>

              <div className="container container--lg " hidden>
                {(_.get(this.props, 'pageContext.site.siteMetadata.footer.has_nav', null) || _.get(this.props, 'pageContext.site.siteMetadata.footer.has_social', null)) && (
                <div className="site-footer__nav">
                  {_.get(this.props, 'pageContext.site.siteMetadata.footer.has_nav', null) && (
                  <ul className="site-footer__menu menu">
                    {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.nav_links', null), (action, action_idx) => (
                    <li key={action_idx}>
                      <Action {...this.props} action={action} />
                    </li>
                    ))}
                  </ul>
                  )}
                  {_.get(this.props, 'pageContext.site.siteMetadata.footer.has_social', null) && (
                  <ul className="site-footer__social menu">
                    {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.social_links', null), (action, action_idx) => (
                    <li key={action_idx}>
                      <Action {...this.props} action={action} />
                    </li>
                    ))}
                  </ul>
                  )}
                </div>
                )}
                <div className="site-footer__copyright">
                  {_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null) && (
                    <span>{htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null))}</span>
                  )}
                  {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.links', null), (action, action_idx) => (
                    <Action key={action_idx} {...this.props} action={action} />
                  ))}
                </div>
              </div>
            </footer>
        );
    }
}
