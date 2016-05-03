/**
 * UI class to contain list of news component 
 * 
 * @class NewsListPanel
 * @member NewsReader.ui.ContentBox
 */
NewsReader.ui.ContentBox.NewsListPanel = React.createClass({
    
    /**
     * @see ReactClass#render
     * @memberOf NewsReader.ui.ContentBox.NewsListPanel
     * @instance
     */
    render: function() {
        return (
            <div className="newsreader-list-panel">
                <div className="list-group"></div>
            </div>
        );
    }
});