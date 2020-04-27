import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { LatestTasksDone } from "./latestDoneChart";

const useStyles = makeStyles({
	root: {
		maxWidth: "200px",
		float: "left",
		margin: "auto",
		textAlign: "center",
		padding: "20px"
	},
	statistics: {
		maxWidth: "100%",
		marginLeft: "3%"
	},
	images: {
		borderRadius: "50%",
		width: "150px",
		height: "150px",
		objectFit: "cover",
		margin: "0 auto 20px auto",
		display: "block"
	}
});

export const Profile = () => {
	const classes = useStyles();
	return (
		<div className="w-100">
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.images}
						component="img"
						alt="Profile Image"
						height="290"
						image="https://www.irreverentgent.com/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-look-away2.jpg"
						title="User Profile Image"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							Eduard WebDeveloper
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							Some text about user. Hobbies, favorite places, motivation!
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary" href="/dashboard">
						Check team progress
					</Button>
					<Button size="small" color="primary">
						Open Todos
					</Button>
				</CardActions>
			</Card>

			<div className={classes.statistics}>
				<LatestTasksDone />
			</div>
		</div>
	);
};
