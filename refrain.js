const { si } = require('nyaapi')

const singleRelease = /\[Ref:?rain\] (?:([ \S]+) - |([ \S]+) )(\d+) (?:[A-Z]+ )?(?:VOSTFR)(?: [A-Z]+)? \[(1080p|720p)\]/
const batchRelease = /\[Ref:?rain\] (?:([ \S]+) - |([ \S]+) )\((\d+)-(\d+)\) (?:[A-Z]+ )?(?:VOSTFR)(?: [A-Z]+)? \[(1080p|720p)\]/

module.exports = async function refrain() {
    const all = await si.searchAllByUser('Refrain', null, { category: '1_3' })
    console.log(all.map(torrent => torrent.name))
    console.log()
}
