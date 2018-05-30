import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { union, indexOf } from 'lodash';

import ProgressBar from 'components/ProgressBar';
import TitleWithShape from 'components/TitleWithShape';
import IconButton from 'components/IconButton';
import BackButton from 'components/BackButton';

const INFORS = [
  {
    title: 'ADMINISTRATIVE APPEALS',
    icon: 'icon34',
  },
  {
    title: 'ADMIRALTY AND AVIATION',
    icon: 'icon33',
  },
  {
    title: 'BANKRUPTCY AND INSOLVENCY',
    icon: 'icon32',
  },
  {
    title: 'CONTRACTS',
    icon: 'icon31',
  },
  {
    title: 'CORPORATE STRUCTURE',
    icon: 'icon30',
  },
  {
    title: 'DEBT COLLECTION',
    icon: 'icon29',
  },
  {
    title: 'EMPLOYMENT',
    icon: 'icon28',
  },
  {
    title: 'FAMILY',
    icon: 'icon27',
  },
  {
    title: 'FOOD ACT AND LIQUOR LICENCING',
    icon: 'icon26',
  },
  {
    title: 'FRANCHISE',
    icon: 'icon25',
  },
  {
    title: 'FRAUD',
    icon: 'icon24',
  },
  {
    title: 'IMMIGRATION',
    icon: 'icon23',
  },
  {
    title: 'INSURANCE',
    icon: 'icon22',
  },
  {
    title: 'INTELLECTUAL PROPERTY',
    icon: 'icon21',
  },
  {
    title: 'INTERNAL DISPUTES',
    icon: 'icon20',
  },
  {
    title: 'LEASING',
    icon: 'icon19',
  },
  {
    title: 'MISLEADING AND DECEPTIVE CONDUCT',
    icon: 'icon18',
  },
  {
    title: 'MORTAGAES AND SECURITIES',
    icon: 'icon17',
  },
  {
    title: 'MOTOR VEHICLE',
    icon: 'icon16',
  },
  {
    title: 'NEIGHBOURHOOD DISPUTES',
    icon: 'icon15',
  },
  {
    title: 'PERSONAL INJURY',
    icon: 'icon14',
  },
  {
    title: 'PLANNING AND ENVIRONMENT',
    icon: 'icon13',
  },
  {
    title: 'PROFESSIONAL DISCIPLINE',
    icon: 'icon12',
  },
  {
    title: 'PROFESSIONAL NEGLIGENCE',
    icon: 'icon11',
  },
  {
    title: 'PROPERTY AND BUSINESS',
    icon: 'icon10',
  },
  {
    title: 'TAXATION',
    icon: 'icon9',
  },
  {
    title: 'WILLS AND ESTATE PLANNING',
    icon: 'icon8',
  },
  {
    title: 'UNSURE',
    icon: 'unsure',
  },
];

const Wrapper = styled.div`
  color: #35447d;
  margin: 7.1rem 5.4rem;
  background: #f8f7f3;
  .bar-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 3rem;
    padding-right: 3.7rem;
    padding-left: 3.7rem;
  }
  .form-title {
    margin-top: 6.2rem;
    margin-left: 10.3rem;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 5.2rem 16rem 2.3rem 6.9rem;
  }

  .button-wrapper {
    padding-bottom: 7rem;
    padding-right: 12.3rem;
    display: flex;
    justify-content: flex-end;
  }

  @media only screen and (max-width: 1400px) {
    .content {
      padding-left: 5rem;
      padding-right: 5rem;
    }
  }

  @media only screen and (max-width: 768px) {
    margin: auto;

    .content {
      padding: 0;
    }

    .button-wrapper {
      margin-top: 5rem;
    }
  }
`;

class Step3 extends Component {
  constructor() {
    super();
    this.state = { selectedIds: [] };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleButtonClick = (selectedId) => {
    const newIds = this.state.selectedIds.slice(0);
    const index = indexOf(newIds, selectedId);
    if (index > -1) {
      newIds.splice(index, 1);
    } else {
      newIds.push(selectedId);
    }

    if (newIds.length > 3) {
      return;
    }

    this.setState({
      selectedIds: union(newIds),
    });
  }

  render() {
    const {
      onBack,
      onNext,
      totalStep,
      currentStep,
    } = this.props;
    const { selectedIds } = this.state;
    return (
      <Wrapper>
        <div className="bar-wrapper">
          <BackButton onClick={onBack} />
          <ProgressBar total={totalStep} current={currentStep} />
        </div>
        <div className="form-title">
          <TitleWithShape
            title={<p>Matter Type <span className="small"> - Select up to three</span></p>}
          />
        </div>
        <div className="content">
          {
            INFORS.map(info =>
              (<IconButton
                key={info.icon}
                name={info.title}
                icon={info.icon}
                background="transparent"
                width={26}
                height={9}
                rightMargin={2}
                topMargin={2}
                selected={indexOf(selectedIds, info.icon) > -1}
                onClick={() => this.handleButtonClick(info.icon)}
              />))
          }
        </div>
        <div className="button-wrapper">
          <IconButton
            name="Next"
            icon="downArrow"
            onClick={onNext}
            selected
            noBorder
          />
        </div>
      </Wrapper>
    );
  }
}

Step3.propTypes = {
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  totalStep: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default Step3;
