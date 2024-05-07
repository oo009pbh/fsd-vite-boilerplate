import { PropsWithChildren, useEffect, useState } from 'react';
import * as RestApi from '@shared/api/api';

// Typings
import { UseDevSampleDetailType } from '@pages/dev/typings/hooks';
import { OnChangeValueType, ParamsType } from '@typings/commonUseType';

export default function useDevSampleDetail({
  detailNo,
}: PropsWithChildren<UseDevSampleDetailType>) {
  const [detail, setDetail] = useState<ParamsType>({});

  const fetchDevSampleDetail = () => {
    const apiParams = {
      manager_no: detailNo,
    };

    RestApi.get('eMANAGER_ADMIN_DETAIL', apiParams)
      .then((res) => {
        const { detail } = res;
        setDetail(detail);
      })
      .catch((err) => {});
  };

  const onChange: OnChangeValueType = (field, value) => {
    setDetail((prevState) => {
      if (field === 'addressFull') {
        return {
          ...prevState,
          ...value,
        };
      }
      return {
        ...prevState,
        [field]: value,
      };
    });
  };

  useEffect(() => {
    if (detailNo) fetchDevSampleDetail();
  }, [detailNo]);

  return { detail, onChange };
}
