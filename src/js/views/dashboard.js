import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { SideBar } from "../component/dashboard/sidebar/sidebar";
import { Route, Switch } from "react-router-dom";
import { Calendar } from "../component/calendar/calendar";
import { Tasks } from "../component/dashboard/tasks/tasks";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { TasksGrid } from "../component/dashboard/tasks/tasksGrid";

const useStyles = makeStyles(theme => ({
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	},
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar
	}
}));

export const Dashboard = ({ match }) => {
	const classes = useStyles();
	return (
		<div className="mt-2">
			<SideBar />
			<main className={classes.content}>
				<div className={classes.toolbar}>
					<Grid container spacing={3}>
						<Grid item md={12}>
							<Route exact path={`${match.path}/tasks`} component={TasksGrid} />
						</Grid>
						<Grid item md={12}>
							<Route exact path={`${match.path}/calendar`} component={Calendar} />
						</Grid>
						<Grid item md={12}>
							<Route exact path={`${match.path}/`} component={Tasks} />
						</Grid>
					</Grid>
				</div>
			</main>
		</div>
	);
};

Dashboard.propTypes = {
	match: PropTypes.object
};
