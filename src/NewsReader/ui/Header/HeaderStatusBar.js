NewsReader.ui.Header.HeaderStatusBar = React.createClass({
    render: function() {
        return (
            <div className="col-md-4 newsreader-col newsreader-header-statusbar-container">
                <div className="newsreader-header-statusbar">News Count <span className="badge">0</span></div>
            </div>
        );
    }
});