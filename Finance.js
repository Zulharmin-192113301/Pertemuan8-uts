//Finance.js

import React from 'react'
import './css/bootstrap.min.css'

export default class Finance extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            keuangan : [],
            deskripsi : null,
            tipe : null,
            nominal : null,
            total :0
        }
    }
   
    setValueState(event){
        this.setState({
         [event.target.name] : event.target.value
         })
       }
   
     addData(){
        var data_tmp = this.state.keuangan;
       var status = this.state.tipe;
       var nominal = parseInt(this.state.nominal)
               
        if (status == "1") {
            this.state.total += nominal;
        }
        else if (status == '2') {
            this.state.total -= nominal;
        }
        else {
            window.alert('Pilih Tipe untuk Total yang benar')
        }

        data_tmp.push({deskripsi : this.state.deskripsi, total : this.state.total ,nominal : this.state.nominal, tipe : this.state.tipe, });
       this.setState({  keuangan : data_tmp })
       } 
     


    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div style={{ margin: 'auto', width: '50%', marginTop: 40 }}>
                        <table border="0" >
                            <tr>
                                <td>Deskripsi</td>
                                <td>
                                    <input name="deskripsi" type="text" className="form-control" value={this.state.deskripsi} onChange={this.setValueState.bind(this)}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Nominal</td>
                                <td>
                                    <input name="nominal" type="number" className="form-control"  value={this.state.nominal} onChange={this.setValueState.bind(this)}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Tipe</td>
                                <td>
                                    <select name="tipe" className="form-control " value={this.state.status} onChange={this.setValueState.bind(this)}>
                                        <option>--Pilih Tipe--</option>
                                        <option value={1}>Pemasukan</option>
                                        <option value={2}>Pengeluaran</option>
                                    </select>
                                </td>
                            </tr>
                        </table>
                        <br />
                        <button onClick={this.addData.bind(this)} type="button" className="btn btn-success">Tambah</button>
                        <br />

                        
                        <table className="table">
                            <thead>
                                <tr><th>Deskripsi</th>
                                <th style={{textAlign : 'right'}}>Nomimal</th></tr>
                            </thead>
                            <tbody>
                               {this.state.keuangan.map((item,index) => (
                                   <tr key={index}>
                                       <td>
                                           {item.deskripsi}

                                       </td>
                                       <td style={{textAlign: 'right'}}>
                                            {item.nominal}
                                       </td>
                                   </tr>
                               )
                               )}

                               
                                <tr>
                                    <td><strong>Total</strong></td>
                                    <td style={{textAlign: 'right'}}>
                                       Rp {this.state.total}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

