import React from 'react';
import _ from 'lodash'; 
import CharactertImage  from './chart_image'; 
// import ChartImage  from './chart_image2'; 
import ScopexPromo  from './scopexPromo'; 


export default class FeatureApps extends React.Component {
    render() { 
        let section = this.props.pageContext.frontmatter.apps_section;
        let familiarSection = this.props.pageContext.frontmatter.apps_info_section; 

        return (
            <div >
                <section className="feature_apps"> 
                    <div className="container container--lg">
                        {_.get(section, 'type', null) && (
                            <div className="row align_end">
                                <div className="col-md-8">
                                    <div className="chart_image">
                                        {/* {_.get(section, 'chart-img', null) && (
                                            <img src={_.get(section, 'chart-img', null)} />
                                        )} */}
                                        <ScopexPromo />
                                    </div>
                                    {_.get(section, 'title', null) && (
                                        <h3 className="mt-0">{_.get(section, 'title', null)}</h3>
                                    )}
                                </div>

                                <div className="col-md-4">
                                    <div className="character_img">
                                        <CharactertImage />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>  
                </section>

                <section className="familiar_apps bg_dark text_light">
                    <div className="container container--lg">
                        {_.get(familiarSection, 'type', null) && (
                            <div className="row align_center">
                                <div className="col-md-8">
                                    {_.get(familiarSection, 'title', null) && (
                                        <h3 className="mt-0 text_light">{_.get(familiarSection, 'title', null)}</h3>
                                    )}
                                </div>

                                <div className="col-md-4">
                                    {_.get(section, 'title', null) && (
                                        <div className="img_wrapper">
                                         {_.map(_.get(familiarSection, 'img_list', null), (feature, feature_idx) => (
                                             console.log(feature),
                                              <div className="img_item cell">
                                                {_.get(feature, 'img', null) && (
                                                    <img src={_.get(feature, 'img', null)}/>    
                                                )}
                                              </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>                
                </section>
            </div>
        );
    }
}
