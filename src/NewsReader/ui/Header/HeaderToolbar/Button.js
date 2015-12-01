NewsReader.ui.Header.HeaderToolbar.Button = React.createClass({
    ICONS: {
        load: <span className="glyphicon glyphicon-refresh"></span>,
        delete: <span className="glyphicon glyphicon-trash"></span>
    },

    render: function() {
        this.cls = 'btn btn-default newsreader-header-toolbar-' + this.props.cls + '-button';
        return (
            <button className={this.cls}>{this.ICONS[this.props.cls]} {this.props.text}</button>
        );
    }
});