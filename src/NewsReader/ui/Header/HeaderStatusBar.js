/**
 * Header status bar representation class 
 * 
 * @class HeaderStatusBar
 * @memberOf NewsReader.ui.Header
 */
NewsReader.ui.Header.HeaderStatusBar = React.createClass({
    
    /**
     * @see ReactClass#render
     * @memberOf NewsReader.ui.Header.HeaderStatusBar
     * @instance
     */
    render: function() {
        return (
            <div className="col-md-4 newsreader-col newsreader-header-statusbar-container">
                <div className="newsreader-header-statusbar">News Count <span className="badge">0</span></div>
            </div>
        );
    }
});