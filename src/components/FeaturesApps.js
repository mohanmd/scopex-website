import React from 'react';
import _ from 'lodash'; 
import chartImage from './chart_image'; 


export default class FeatureApps extends React.Component {
    render() { 
        let section = this.props.pageContext.frontmatter.apps_section;
        console.log(this.props);

        return (
            <section className="feature_apps">   
                <div className="container container--lg">
                    {_.get(section, 'type', null) && (
                        <div className="row align_end">
                            <div className="col-md-8">
                                <div className="chart_image">
                                    {_.get(section, 'chart-img', null) && (
                                        <img src={_.get(section, 'chart-img', null)} />
                                    )}
                                </div>
                                {_.get(section, 'title', null) && (
                                    <h3 className="">{_.get(section, 'title', null)}</h3>
                                )}
                            </div>

                            <div className="col-md-4">
                                <div className="character_img">
                                    {_.get(section, 'character_img', null) && (
                                        <img src={_.get(section, 'character_img', null)} />
                                    )}
                                    <chartImage></chartImage>
                                </div>
                            </div>
                        </div>
                    )}
                 </div>
            </section>
        );
    }
}
