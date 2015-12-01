NewsReader.ui.ContentBox = React.createClass({
    render: function() {
        return (
            <div className="row" id="news-reader-content-box">
                <div className="col-md-4 newsreader-col newsreader-list-container">
                    <NewsReader.ui.ContentBox.NewsListPanel />
                </div>
                <div className="col-md-8 newsreader-col newsreader-content-container">
                    <NewsReader.ui.ContentBox.NewsContentPanel />
                </div>
            </div>
        );
    }
});