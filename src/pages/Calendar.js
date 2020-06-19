import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: Math.max(1000, window.innerWidth - 340),
        justifyContent: 'space-around',
    },
    gridList: {
        width: Math.max(1000, window.innerWidth - 340),
        height: 'auto',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

export default function Calendar(props) {

    const classes = useStyles();

    let counter = 0;

    return (
        <div className={classes.root}>
            <GridList cellHeight={130} cols={7} className={classes.gridList}>
                <GridListTile key="Subheader" cols={1} style={{ height: 'auto', color: '#fff' }}>
                    <ListSubheader component="div" style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>{"شنبه"}</ListSubheader>
                </GridListTile>
                <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
                    <ListSubheader component="div" style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>{"یکشنبه"}</ListSubheader>
                </GridListTile>
                <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
                    <ListSubheader component="div" style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>{"دوشنبه"}</ListSubheader>
                </GridListTile>
                <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
                    <ListSubheader component="div" style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>{"سه شنبه"}</ListSubheader>
                </GridListTile>
                <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
                    <ListSubheader component="div" style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>{"چهارشنبه"}</ListSubheader>
                </GridListTile>
                <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
                    <ListSubheader component="div" style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>{"پنجشنبه"}</ListSubheader>
                </GridListTile>
                <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
                    <ListSubheader component="div" style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>{"جمعه"}</ListSubheader>
                </GridListTile>
                {[
                    {
                        title: '29',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '30',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },{
                    title: '01',
                    img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '02',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '03',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '04',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '05',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '06',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '07',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '08',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '09',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '10',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '11',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '12',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '13',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '14',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '15',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '16',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '17',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '18',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '19',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '20',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '21',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '22',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '23',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '24',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '25',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '26',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '27',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '28',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '29',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '30',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '31',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '01',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    },
                    {
                        title: '02',
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg'
                    }].map(tile => {
                        const index = counter;
                        counter++;
                        return (
                            <GridListTile key={tile.img} onClick={() => {
                                props.recordClickListener(index);
                            }}>
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: '#27293d',
                                }}>
                                    <h2 style={{
                                        color: '#fff',
                                        width: '100%',
                                        height: '100%',
                                        textAlign: 'center',
                                        verticalAlign: 'middle',
                                        lineHeight: '120px'
                                    }}>
                                        {tile.title}
                                    </h2>
                                </div>
                            </GridListTile>
                        );
                    })
                }
            </GridList>
        </div>
    );
}