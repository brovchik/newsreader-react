/**
 * Application viewport class. Contains whole page markup.
 * 
 * @class Viewport
 * @memberOf NewsReader.ui
 */
NewsReader.ui.Viewport = React.createClass({
    
    /**
     * @see ReactClass#render 
     * @memberOf NewsReader.ui.Viewport
     * @instance
     */
    render: function() {
        return (
            <div className="newsreader-viewport">
                <NewsReader.ui.Header />
                <NewsReader.ui.ContentBox />
            </div>
        );
    }
});