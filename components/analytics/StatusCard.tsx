import React, { ReactSVGElement, SVGProps } from 'react';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
interface StatusCardProps {
  title: string;
  type: string;
  number: number;
  proceedIcon?: {
    showIcon?: boolean;
    proceedCallback?: () => void;
  };
}

const renderIcon = (
  type
): { bgColor: string; icon: SVGProps<ReactSVGElement> } => {
  switch (type) {
    case 'fulfilled':
      return {
        bgColor: 'red',
        icon: <ArticleOutlinedIcon />,
      };
      break;
    case 'invoiced':
      return {
        bgColor: 'red',
        icon: <LocalPoliceOutlinedIcon />,
      };
      break;
    case 'completed':
      return {
        bgColor: 'red',
        icon: <CheckCircleOutlineOutlinedIcon />,
      };
      break;
    case 'assigned':
      return {
        bgColor: 'red',
        icon: <PersonAddAltOutlinedIcon />,
      };
      break;
    default:
      return {
        bgColor: 'black',
        icon: <div />,
      };
  }
};

const StatusCard = (props: StatusCardProps) => {
  const { title, number, type, proceedIcon } = props;

  return (
    <div
      className={`${
        renderIcon(type)?.bgColor
      }text-white flex justify-between w-full h-[137px] rounded-lg`}
    >
      <div>
        <p>{title}</p>
        <p className="text-2xl font-bold">{number}</p>
        <p className="text-xs">Quantity</p>
      </div>
      <div className="flex flex-col justify-between">
        <span>{renderIcon(type)?.icon}</span>
        <span>
          {proceedIcon?.showIcon && (
            <ChevronRightOutlinedIcon
              onClick={() => proceedIcon?.proceedCallback()}
            />
          )}
        </span>
      </div>
    </div>
  );
};

export default StatusCard;
