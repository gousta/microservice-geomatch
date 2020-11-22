import { ERROR_ADDRESS_SHORT, BAD_REQUEST, ERROR, NOT_FOUND, OK } from '../constants/response';
import { Response, Request } from 'express';
import { getDistrictByAddress } from '../services/geomatch';
import config from '../../config';
import logger from '../logger';

export async function addressSearch(req: Request, res: Response): Promise<Response | void> {
  const address = req.query?.address as string;

  if (!address || address.length <= config.common.minAddressLength) {
    return res.status(400).json({
      status: BAD_REQUEST,
      search: address,
      error: ERROR_ADDRESS_SHORT,
    });
  }

  try {
    const district = await getDistrictByAddress(address);

    if (district) {
      return res.status(200).json({
        status: OK,
        search: address,
        location: district,
      });
    }

    return res.status(404).json({
      status: NOT_FOUND,
      search: address,
    });
  } catch (e) {
    logger.error(e);
    return res.status(500).json({
      status: ERROR,
      search: address,
      error: e.message,
    });
  }
}
