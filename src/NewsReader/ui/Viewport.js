NewsReader.ui.Viewport = React.createClass({
    render: function() {
        return (
            <div className="newsreader-viewport">
                <NewsReader.ui.Header />
                <NewsReader.ui.ContentBox />
            </div>
        );
    }
});