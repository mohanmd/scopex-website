import React from 'react'; 
import _ from 'lodash';
import {classNames, withPrefix,  toStyleObj} from '../utils';

export default class GridSection extends React.Component {
    render() {
        console.log(this.props );
        let section = _.get(this.props, 'section', null);

        return (
            <section className={classNames('Gridsection',_.get(section, 'class_name', null))} style={toStyleObj('background-image: url(\'' + withPrefix(_.get(section, 'bg_images', null)) + '\')')}>  
                <div className="container container--lg">
                    {_.get(section, 'section_title', null) && (
                    <h1 className="block-title">{_.get(section, 'section_title', null)}</h1>
                    )}

                    {_.get(section, 'grid_item', null) && (
                    <div className="block-content">
                    <div className={classNames('grid', {'grid-col-4': _.get(section, 'grid_column', null) === 'four', 'grid-col-3': _.get(section, 'grid_column', null) === '3'})}>
                        {_.map(_.get(section, 'grid_item', null), (item, item_idx) => (
                        <div key={item_idx} className="grid-item">
                        <div className="grid-item-inside card">
                            {_.get(item, 'icon', null) && (
                            <div className="grid-item-image">
                            <img src={withPrefix(_.get(item, 'icon', null))}  alt="Card"/>
                            </div>
                            )}
                            {_.get(item, 'grid_title', null) && (
                            <div className="grid-item-title">
                                <div className="card_title">{(_.get(item, 'grid_title', null))} </div>
                            </div>
                            )}
                        </div>
                        </div>
                        ))}
                    </div>
                    </div>
                    )}
                </div>
            </section>
        );
    }
}