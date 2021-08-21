import React from 'react';
import _ from 'lodash';

import {classNames, toStyleObj, withPrefix} from '../utils';
import SectionActions from './SectionActions';
 
export default class HeroSection extends React.Component {
  state = { button1: false, button2: false, button3: false, isActive: false };
  constructor() {
    super();
  }

  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive });
    console.log('test');
  };
    render() {
        const { showing1, showing2, showing3, isActive } = this.state;
        // console.log(showing1);
        let section = _.get(this.props, 'section', null);
        let background = _.get(section, 'background', null);
        let background_color = _.get(background, 'background_color', null) || 'white';
        let background_opacity_pct = _.get(background, 'background_image_opacity', null) || 100;
        let background_opacity = background_opacity_pct * 0.01;
        let background_size = _.get(background, 'background_image_size', null) || 'cover';
        let background_repeat = _.get(background, 'background_image_repeat', null) || 'no-repeat';
        
        return (
            <section className={classNames('section', 'hero', {'bg-image': _.get(section, 'has_background', null) && _.get(background, 'background_image', null), 'inverse bg-blue': _.get(section, 'has_background', null) && (background_color === 'blue'), 'bg-gray': _.get(section, 'has_background', null) && (background_color === 'gray'), 'section--padding': _.get(section, 'has_background', null) || _.get(section, 'image', null)})}>
              {(_.get(section, 'has_background', null) && _.get(background, 'background_image', null)) && (
              <div className="bg-image__image" style={toStyleObj('background-image: url(\'' + withPrefix(_.get(background, 'background_image', null)) + '\'); opacity: ' + background_opacity + '; background-size: ' + background_size + '; background-repeat: ' + background_repeat)}/>
              )}
              <div className="container container--lg">
                <div className={classNames('flex', 'flex--middle', 'flex--center', 'flex--col-2', {'align-center': _.get(section, 'align', null) === 'center', 'align-right': _.get(section, 'align', null) === 'right'})}>
                  {_.get(section, 'image', null) && (
                  <div className={classNames('cell', 'section__media', {'section__media--right': _.get(section, 'image_position', null) === 'right'})}>
                    <img src={withPrefix(_.get(section, 'image', null))} alt={_.get(section, 'image_alt', null)} />
                  </div>
                  )}
                  <div className="cell section__body">
                    {_.get(section, 'title', null) && (
                    <h1 className="section__title">{_.get(section, 'title', null)}</h1>
                    )}
                    {_.get(section, 'subtitle', null) && (
                    <div className="section__copy">
                      <p>{_.get(section, 'subtitle', null)}</p>
                    </div>
                    )}
                    {_.get(section, 'actions', null) && (
                    <div className="section__actions btn-group">
                      <SectionActions {...this.props} actions={_.get(section, 'actions', null)} />
                    </div>
                    )}
                  </div>
                </div>
              </div>


                <div className="fixed_sect">
                  
                    <div className="item message"  onClick={() => this.setState({ showing1: !showing1})}>
                      <div className="icon">
                        <img src="images/icon/fixed/chat.svg" />
                      </div>
                      { showing1
                          ? <div className="content">
                                <div className="title">Chart with Expert</div>
                                <div className="sub_title">Available Monday - Saturday </div>
                            </div>
                          : null
                      }
                    </div>
                    <div className="item enquiry"  onClick={this.handleToggle}>
                      <div className="icon">
                        <img src="images/icon/fixed/enquiry.svg" />
                      </div>
                      { showing2 
                          ? <div className="content">
                                <div className="title">Enquiry</div>
                                <div className="sub_title">Available Monday - Saturday </div>
                            </div>
                          : null
                      }
                          
                    </div>
                    <div className="item support"  onClick={() => this.setState({ showing3: !showing3 })}>
                      <div className="icon">
                        <img src="images/icon/fixed/support.svg" />
                      </div>
                      { showing3 
                          ? <div className="content">
                                <div className="title">+91 9841481435</div>
                                <div className="sub_title">Available 24/7</div>
                            </div>
                          : null
                      }
                    </div>
                </div>

              <div className="modal enquery_modal" data-active={isActive ? "active" : ""}> 
                <div className="modal-header">
                  {/* <h4>Enquiry</h4> */}
                  <div className="close_button" onClick={this.handleToggle}>
                    X
                  </div>
                </div>
                <div className="modal-body">
                    <div className="row">
                      <div className="col-md-5">
                          {_.get(this.props, 'pageContext.site.siteMetadata.header.logo', null) && (
                            <div className="logo">
                              <img src={_.get(this.props, 'pageContext.site.siteMetadata.header.logo', null)} />
                            </div>
                          )}
                          <h3 className="title">Request a Call Back</h3>
                          <div className="sub_title">Get answers and export guidance</div>
                      </div>
                      <div className="col-md-7">
                        <form className="">
                            <div className="form-group">
                                <label>Name</label>
                                <input className="form_control" type="text"/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input className="form_control" type="email"/>
                            </div>
                            <div className="form-group">
                                <label>Mobile Number</label>
                                <input className="form_control" type="text"/>
                            </div>
                            <div className="form-group">
                                <label>Comment or Message</label>
                                <textarea className="form_control" type="text"></textarea>
                            </div>
                            <div className="text-right form-group">
                              <button>Call Back</button>
                            </div>
                        </form>
                      </div>

                    </div>
                </div>
              </div>
              <div className="modal-overlay"  data-active={isActive ? "active" : ""} onClick={this.handleToggle}></div>
            </section>
        );
    }
}
