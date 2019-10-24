import React from 'react'
import { withStyles } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    appbar: {
        flexGrow: 1,
    }
}
class Header extends React.Component {

    render() {
        const { classes } = this.props
        return (
            <div className={classes.appbar} >
                <AppBar position='sticky' >
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            To-Do-List
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>

        )
    }
}

export default withStyles(styles)(Header);