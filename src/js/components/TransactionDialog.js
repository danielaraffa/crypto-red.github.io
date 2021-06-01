import React from "react";
import { withStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Table from "@material-ui/core/Table";

import { HISTORY } from "../utils/constants";
import api from "../utils/api";
import price_formatter from "../utils/price-formatter";

const styles = theme => ({
    dialog: {
        [theme.breakpoints.down("sm")]: {
            "& .MuiDialog-container .MuiDialog-paper": {
                margin: "24px 0px",
                borderRadius: 0
            },
        }
    },
    dialogBody: {
        overflowY: "auto",
        display: "flex",
        flexDirection: "column"
    },
    tableCellBold: {
        fontWeight: "bold"
    },
    breakWord: {
        wordBreak: "break-all"
    },
    underline: {
        textDecoration: "underline"
    }
});


class TransactionDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            classes: props.classes,
            transaction: props.transaction,
            selected_locales_code: props.selected_locales_code,
            selected_currency: props.selected_currency,
            open: props.open,
            _coin_data: null,
            _history: HISTORY
        };
    };

    componentWillReceiveProps(new_props) {

        this.setState({...new_props}, () => {

            this._get_coin_data();
        });
    };

    componentDidMount() {

        this._get_coin_data();
    }

    _on_close = (event, account) => {

        this.props.onClose(event, account);
    };

    _get_coin_data() {

        const { transaction } = this.state;

        if(transaction) {

            this.setState({_coin_data: null}, () => {

                api.get_coin_data(transaction.crypto_id, this._set_coin_data);
            });
        }
    }

    _set_coin_data = (error, data) => {

        this.setState({_coin_data: data});
    };

    _open_link = (event, link) => {

        const { _history } = this.state;
        _history.push(link);
    };


    render() {

        const { classes, transaction, selected_currency, selected_locales_code, open, _coin_data, _address } = this.state;

        const amount_sent_fiat = _coin_data !== null ? transaction.amount_crypto * _coin_data.market_data.current_price[selected_currency.toLowerCase()]: 0;
        const amount_fee_fiat = _coin_data != null ? transaction.fee * _coin_data.market_data.current_price[selected_currency.toLowerCase()]: 0;

        return (
            <Dialog
                open={open}
                onClose={(event) => {this._on_close(event, transaction)}}
                className={classes.dialog}
                aria-labelledby="show-transaction-memo-dialog-title"
                aria-describedby="show-transaction-memo-dialog-description"
            >
                {
                    Boolean(transaction) ?
                        <div className={classes.dialogBody}>
                            <DialogTitle id="show-transaction-memo-dialog-title" className={classes.breakWord}>Transaction's ID {transaction.id}</DialogTitle>
                            <DialogContent className={classes.dialogBody}>
                                <DialogContentText id="show-transaction-memo-dialog-description">
                                    <Table>
                                        <Table aria-label="main-info-table">
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell align="left" className={classes.tableCellBold}>Send at</TableCell>
                                                    <TableCell align="right">{new Intl.DateTimeFormat(selected_locales_code, {weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric"}).format(new Date(transaction.timestamp))}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="left" className={classes.tableCellBold}>Send from</TableCell>
                                                    <TableCell align="right">{transaction.send_from}</TableCell>
                                                </TableRow>
                                                {
                                                    typeof transaction.send_from_public_key !== "undefined" ?
                                                    <TableRow>
                                                        <TableCell align="left" className={classes.tableCellBold}>Send from Public Key</TableCell>
                                                        <TableCell align="right">{transaction.send_from_public_key}</TableCell>
                                                    </TableRow>: null
                                                }
                                                <TableRow>
                                                    <TableCell align="left" className={classes.tableCellBold}>Send to</TableCell>
                                                    <TableCell align="right">{transaction.send_to}</TableCell>
                                                </TableRow>
                                                {
                                                    typeof transaction.send_to_public_key !== "undefined" ?
                                                    <TableRow>
                                                        <TableCell align="left" className={classes.tableCellBold}>Send to Public Key</TableCell>
                                                        <TableCell align="right">{transaction.send_to_public_key}</TableCell>
                                                    </TableRow>: null
                                                }
                                                <TableRow>
                                                    <TableCell align="left" className={classes.tableCellBold}>Memo</TableCell>
                                                    <TableCell align="right" className={classes.breakWord}>{transaction.memo}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="left" className={classes.tableCellBold}>Amount</TableCell>
                                                    {_coin_data ?
                                                        <TableCell align="right">{price_formatter(parseFloat(transaction.amount_crypto), _coin_data.symbol, selected_locales_code)} ({price_formatter(amount_sent_fiat, selected_currency, selected_locales_code)})</TableCell>
                                                        : null
                                                    }
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="left" className={classes.tableCellBold}>Fee</TableCell>
                                                    {_coin_data ?
                                                        <TableCell align="right">{price_formatter(parseFloat(transaction.fee), _coin_data.symbol, selected_locales_code)} ({price_formatter(amount_fee_fiat, selected_currency, selected_locales_code)})</TableCell>
                                                        : null
                                                    }
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="left" className={classes.tableCellBold}>Crypto id</TableCell>
                                                    <TableCell align="right" className={classes.underline} onClick={(event) => {this._open_link(event, "/coins/" + transaction.crypto_id + "/transactions")}}>{transaction.crypto_id}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </Table>
                                </DialogContentText>
                            </DialogContent>
                        </div>: null
                }

                <DialogActions>
                    {
                        transaction ?
                            _address === transaction.send_to ?
                                <Button onClick={(event) => {this._open_link(event, `/coins/${transaction.crypto_id}/send/${transaction.send_from}`)}} color="primary">
                                    Send back once
                                </Button> :
                                <Button onClick={(event) => {this._open_link(event, `/coins/${transaction.crypto_id}/send/${transaction.send_to}`)}}>
                                    Send to again
                                </Button>
                        : null
                    }
                    <Button onClick={(event) => {this._on_close(event, transaction)}}  color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default withStyles(styles)(TransactionDialog);
