NewsReader.ui.Header.HeaderToolbar = React.createClass({
    render: function() {
        return (
            <div className="col-md-8 newsreader-col newsreader-header-toolbar-container">
                <div className="newsreader-header-toolbar">
                    <NewsReader.ui.Header.HeaderToolbar.Button cls="load" text="Load News..."/>
                    <NewsReader.ui.Header.HeaderToolbar.Button cls="delete" text="Delete"/>
                </div>
            </div>

        );
    }
});