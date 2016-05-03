/**
 * UI Header class. Contains header markup
 * 
 * @class Header
 * @memberOf NewsReader.ui 
 */
NewsReader.ui.Header = React.createClass({
    
    /**
     * @see ReactClass#render 
     * @memberOf NewsReader.ui.Header
     * @instance
     */
    render: function() {
        return (
            <div className="row newsreader-header">
                <NewsReader.ui.Header.HeaderToolbar />
                <NewsReader.ui.Header.HeaderStatusBar />
            </div>
        );
    }
});