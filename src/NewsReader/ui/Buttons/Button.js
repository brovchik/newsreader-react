/**
 * Default button class. 
 * 
 * @class Button
 * @memberOf NewsReader.ui.Buttons
 */
NewsReader.ui.Buttons.Button = React.createClass({
    
    /**
     * Icons to show before button text
     * @memberOf NewsReader.ui.Buttons.Button
     * @property {XML} ICONS.load - Bootstrap load icon markup
     * @property {XML} ICONS.delete - Bootstrap delete icon markup
     * @instance
     */
    ICONS: {
        load: <span className="glyphicon glyphicon-refresh"></span>,
        delete: <span className="glyphicon glyphicon-trash"></span>
    },
    
    /**
     * @see ReactClass#PropTypes 
     * @memberOf NewsReader.ui.Buttons.Button
     * @property {String} propTypes.cls - CSS class to assign to button.
     * @property {String} propTypes.text - Text to display inside the button
     * @instance
     */
    propTypes: {
        cls: React.PropTypes.string,
        text: React.PropTypes.string
    },
    
    /**
     * Current button css class. 
     * @memberOf NewsReader.ui.Buttons.Button
     * @type {String}
     * @instance
     */
    cls: null,

    /**
     * @see ReactClass#render
     * @memberOf NewsReader.ui.Buttons.Button
     * @instance
     */
    render: function() {
        this.cls = 'btn btn-default newsreader-header-toolbar-' + this.props.cls + '-button';
        return (
            <button className={this.cls}>{this.ICONS[this.props.cls]} {this.props.text}</button>
        );
    }
});