import as1726_geotech as ag
from as1726_geotech import mc, psd, spt


def test_version():
    assert isinstance(ag.__version__, str) and ag.__version__


def test_mc():
    assert mc.moisture_content(110, 100) == 10.0


def test_psd_placeholder():
    import pytest

    with pytest.raises(NotImplementedError):
        psd.particle_size_distribution([])


def test_spt_class():
    s = spt.SPTTest()
    s.add(1.0, 10)
    assert s.depths == [1.0] and s.n_values == [10]
