import React from 'react'

export default function Comment() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='panel panel-default widget'>
          <div className='panel-heading'>
            <span className='glyphicon glyphicon-comment' />
            <h3 className='panel-title'>Recent Comments</h3>
            <span className='label label-info'>78</span>
          </div>
          <div className='panel-body'>
            <ul className='list-group'>
              <li className='list-group-item'>
                <div className='row'>
                  <div className='col-xs-2 col-md-1'>
                    <img
                      src='http://placehold.it/80'
                      className='img-circle img-responsive'
                      alt=''
                    />
                  </div>
                  <div className='col-xs-10 col-md-11'>
                    <div>
                      <a href='http://www.jquery2dotnet.com/2013/10/google-style-login-page-desing-usign.html'>
                        Google Style Login Page Design Using Bootstrap
                      </a>
                      <div className='mic-info'>
                        By: <a href='#'>Bhaumik Patel</a> on 2 Aug 2013
                      </div>
                    </div>
                    <div className='comment-text'>Awesome design</div>
                    <div className='action'>
                      <button type='button' className='btn btn-primary btn-xs' title='Edit'>
                        <span className='glyphicon glyphicon-pencil' />
                      </button>
                      <button type='button' className='btn btn-success btn-xs' title='Approved'>
                        <span className='glyphicon glyphicon-ok' />
                      </button>
                      <button type='button' className='btn btn-danger btn-xs' title='Delete'>
                        <span className='glyphicon glyphicon-trash' />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
