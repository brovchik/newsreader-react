NewsReader.ui.Header = React.createClass({
    render: function() {
        return (
            <div className="row newsreader-header">
                <NewsReader.ui.Header.HeaderToolbar />
                <NewsReader.ui.Header.HeaderStatusBar />
            </div>
        );
    }
});