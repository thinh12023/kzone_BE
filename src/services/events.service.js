const { Events, Sequelize, sequelize } = require("../models");
const { getPagination } = require("../utils/common");
const { Op } = Sequelize;

//search by id
const searchById = async ({ id, ...payload }) => {
  const { count, rows } = await Events.findAndCountAll({
    where: { id },
  });
  return ({
    data: { count, rows },
    message: "Search events successfully!",
  });
}

//search
const search = async ({ page = 0, size = 999, title }) => {
  const { limit, offset } = getPagination(page, size);
  let searchTerm = {
    limit,
    offset,
    order: [["createdAt", "ASC"]],
  };
  if (title != undefined && title != null && title != "") {
    searchTerm = {
      ...searchTerm,
      where: {
        ...searchTerm.where,
        title: {
          [Op.like]: `%${title}%`,
        },
      }
    }
  }
  const { rows, count } = await Events.findAndCountAll(searchTerm);
  return ({
    data: { count, rows },
    message: "Search events successfully!",
  })
}

module.exports = {
  search,
  searchById,
}