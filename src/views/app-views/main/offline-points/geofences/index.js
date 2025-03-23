import React from 'react'
import { Row, Col, Avatar } from 'antd';
import RegiondataWidget from 'components/shared-components/RegiondataWidget';
import { 
  regionData
} from './AnalyticDashboardData'

const rederRegionTopEntrance = (
  <div className="mb-4">
    <div className="d-flex align-items-center">
      <Avatar size={20} src="/img/flags/us.png"/>
      <h2 className="mb-0 ml-2 font-weight-bold">37.61%</h2>
    </div>
    <span className="text-muted">Top entrance region</span>
  </div>
)

export const AnalyticDashboard = () => {
  return (
    <>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={24} xxl={18}>
          <RegiondataWidget 
            title="Entrance by region"
            data={regionData}
            content={rederRegionTopEntrance}
          />
        </Col>
      </Row>
    </>
  )
}

export default AnalyticDashboard